import Container from "@/components/common/Container/Container";
import DashedBorder from "@/components/common/DashedBorder/DashedBorder";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stats = [
    { value: "32,000 +", label: "Experienced tutors" },
    { value: "300,000 +", label: "5-star tutor reviews" },
    { value: "120 +", label: "Subjects taught" },
    { value: "200 +", label: "Tutor nationalities" },
  ];

  return (
    <main>
      <section className="hero mb-6 mt-5">
        <Container>
          <div className="flex justify-between">
            <div className="w-180 rounded-[30px] bg-[#f8f8f8] py-24.5 px-16">
              <h1 className="text-[48px] leading-[1.17] tracking-[-0.02em] mb-8">
                Unlock your potential with the best{" "}
                <span className="relative z-0">
                  <span className="absolute bg-yellow-soft rounded-lg -z-10 top-3 bottom-1.5 left-0.5 right-1"></span>
                  <em className="font-normal px-0.5">language</em>{" "}
                </span>
                tutors
              </h1>
              <p className="font-normal leading-snug  tracking-[-0.02em] w-120 mb-16">
                Embark on an Exciting Language Journey with Expert Language
                Tutors: Elevate your language proficiency to new heights by
                connecting with highly qualified and experienced tutors.
              </p>
              <Link
                className="leading-[1.56] font-bold text-[18px] inline-flex justify-center items-center h-15 min-w-66.75 bg-yellow rounded-xl transition-colors duration-250 [:hover,:focus]:bg-[#ffdc86]"
                href={"/teachers"}
              >
                Get started
              </Link>
            </div>
            <div className="relative w-142 rounded-[30px] overflow-hidden">
              <Image
                className="object-cover"
                src={"/hero.png"}
                fill
                priority
                sizes="568px"
                alt="Language tutor illustration"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="stats">
        <Container>
          <h2 className="sr-only">Platform statistics</h2>
          <div className="relative h-29 px-30.5">
            <ul className="flex justify-between items-center gap-25 h-full">
              {stats.map((stat, id) => {
                return (
                  <li
                    className="flex justify-center items-center gap-4"
                    key={id}
                  >
                    <p className="text-[28px] leading-[1.14] tracking-[-0.02em]">
                      {stat.value}
                    </p>
                    <p className="max-w-18 font-normal text-[14px] leading-[1.29] tracking-[-0.02em] text-[rgba(18,20,23,0.7)]">
                      {stat.label}
                    </p>
                  </li>
                );
              })}
            </ul>
            <DashedBorder />
          </div>
        </Container>
      </section>
    </main>
  );
}
