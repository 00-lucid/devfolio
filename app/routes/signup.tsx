import { Link } from "react-router-dom";
import { ActionFunction, Form, json } from "remix";
import { db } from "~/util/db.server";
import { createUserSession, register } from "~/util/session.server";

function validateUsername(username: unknown) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 4) {
    return `Passwords must be at least 6 characters long`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/showcase";
  console.log("|");
  console.log("username: ", username);
  console.log("password: ", password);
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  console.log("validate complete");

  const fields = { username, password };
  console.log("fields: ", fields);
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  console.log("register...");
  const userExists = await db.user.findFirst({
    where: { username },
  });
  if (userExists) {
    return badRequest({
      fields,
      formError: `User with username ${username} already exists`,
    });
  }
  const user = await register({ username, password });
  if (!user) {
    return badRequest({
      fields,
      formError: `Something went wrong trying to create a new user.`,
    });
  }
  return createUserSession(user.id, redirectTo);
};

export default function SignupRoute() {
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div>
                <svg
                  className="w-10 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 225 225"
                >
                  <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                    <g>
                      <path
                        id="Layer0_0_1_STROKES"
                        className="st0"
                        d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-black font-display font-semibold lg:text-left xl:text-5xl
                  xl:text-bold"
            >
              Sign up
            </h2>
            <div className="mt-12">
              <Form method="post">
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Name
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black bg-gray-100"
                    type=""
                    name="username"
                    placeholder="username"
                    // defaultValue={actionData?.fields?.username}
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black bg-gray-100"
                    type="password"
                    name="password"
                    placeholder="password"
                    // defaultValue={actionData?.fields?.password}
                  />
                </div>
                <div className="mt-10">
                  <button
                    className="bg-main-black text-gray-100 p-4 w-full rounded-full tracking-wide
                              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-main-black/90
                              shadow-lg"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Do you have an account ?{" "}
                <Link
                  to="/login"
                  className="cursor-pointer text-black opacity-50 hover:opacity-100"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-main-black flex-1 h-screen"></div>
      </div>
    </>
  );
}
