import { PrismaClient, Prisma } from "@prisma/client";

const prisma: any = new PrismaClient();
// id String @id @default(uuid())
// title String
// view Int
// createdAt  DateTime   @default(now())
// writer String
// introduce String
// // 모집인원
// scale_people Int
// // 일정
// scale_date Int
// // 태그
// tag String
const posts = [
  {
    title: "Powerful Front Librery",
    view: 652,
    writer: "john",
    introduce: "bettwe us",
    scale_people: 4,
    scale_date: 30,
    tag: "react node",
  },
  {
    title: "Apple Software Fix",
    view: 1986,
    writer: "david",
    introduce: "apple is good",
    scale_people: 12,
    scale_date: 90,
    tag: "swift",
  },
  {
    title: "Android Developer",
    view: 931,
    writer: "kim",
    introduce: "omg",
    scale_people: 4,
    scale_date: 30,
    tag: "java kotln",
  },
  {
    title: "Web Fix",
    view: 5,
    writer: "nam",
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
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
  {
    star: 190,
    name: "Facebook lib project",
    content: "facebook is...",
    link: "https://www.naver.com/",
    writer: "naver",
    introduce: "korea software firm",
    tag: "vue next",
  },
];
async function main() {
  await Promise.all(
    posts.map((post) => {
      return prisma.post.create({ data: post });
    })
  );

  await Promise.all(
    projects.map((project) => {
      return prisma.project.create({ data: project });
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
