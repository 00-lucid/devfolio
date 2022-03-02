import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma: any = new PrismaClient();

const posts = [
  {
    title: "Powerful Front Librery",
    view: 652,
    introduce: "bettwe us",
    scale_people: 4,
    scale_date: 30,
    tag: "react node",
  },
  {
    title: "Apple Software Fix",
    view: 1986,
    introduce: "apple is good",
    scale_people: 12,
    scale_date: 90,
    tag: "swift",
  },
  {
    title: "Android Developer",
    view: 931,
    introduce: "omg",
    scale_people: 4,
    scale_date: 30,
    tag: "java kotln",
  },
  {
    title: "Web Fix",
    view: 5,
    introduce: "beebee",
    scale_people: 1,
    scale_date: 90,
    tag: "html js",
  },
];

const projects = [
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    introduce: "korea software firm",
    tag: "vue next",
  },
];

const users = [
  {
    username: "root",
  },
];

async function main() {
  await prisma.post.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.user.deleteMany({});

  const passwordHash = await bcrypt.hash("root", 10);
  const data = { passwordHash, ...users[0] };
  const developer = await prisma.user.create({ data });

  await Promise.all(
    posts.map((post) => {
      const data = { writerId: developer.id, ...post };
      return prisma.post.create({ data });
    })
  );

  await Promise.all(
    projects.map((project) => {
      const data = { writerId: developer.id, ...project };
      return prisma.project.create({ data });
    })
  );
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
