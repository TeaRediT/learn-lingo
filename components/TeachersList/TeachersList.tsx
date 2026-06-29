import { Teacher } from "@/types/teachers";
import Image from "next/image";

interface TeachersListProps {
  teachers: Teacher[];
}

const statsListItemStyles =
  "after:content-[''] after:w-px after:h-4 after:ml-[16px] after:bg-primary after:opacity-[0.2]";

const TeachersList = ({ teachers }: TeachersListProps) => {
  return (
    <ul className="flex flex-col gap-8 justify-center">
      {teachers.map((el, idx) => {
        return (
          <li
            className="p-6 flex justify-between bg-white rounded-3xl"
            key={idx}
          >
            <div className="relative h-30 w-30 flex justify-center items-center rounded-full border-[3px] border-yellow-soft">
              <div className="relative h-24 w-24 rounded-full overflow-hidden p-3">
                <Image
                  className="object-cover"
                  src={el.avatar_url}
                  alt="teacher avatar"
                  fill
                  sizes="96px"
                />
              </div>
              <svg className="absolute top-4 right-5" width={12} height={12}>
                <use href="/sprite.svg#icon-online-circle"></use>
              </svg>
            </div>
            <div className="w-242">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="leading-normal text-secondary mb-2">
                    Languages
                  </p>
                  <h2 className="text-[24px]">{el.name + " " + el.surname}</h2>
                </div>
                <div className="flex gap-16">
                  <ul className="flex gap-4 h-6 leading-normal">
                    <li
                      className={`flex items-center gap-2 ${statsListItemStyles}`}
                    >
                      <svg className="stroke-primary" width={16} height={16}>
                        <use href="/sprite.svg#icon-book"></use>
                      </svg>
                      <p>Lessons online</p>
                    </li>
                    <li className={statsListItemStyles}>
                      <p>Lessons done: {el.lessons_done}</p>
                    </li>
                    <li
                      className={`flex items-center gap-2 ${statsListItemStyles}`}
                    >
                      <svg className="fill-[#ffc531]" width={16} height={16}>
                        <use href="/sprite.svg#icon-star"></use>
                      </svg>
                      <p>Rating: {el.rating}</p>
                    </li>
                    <li>
                      <p>
                        Price / 1 hour:{" "}
                        <span className="text-[#38cd3e]">
                          {el.price_per_hour + "$"}
                        </span>
                      </p>
                    </li>
                  </ul>
                  <button
                    className="cursor-pointer"
                    type="button"
                    aria-label="add to favorites"
                  >
                    <svg className="stroke-primary" width={26} height={26}>
                      <use href="/sprite.svg#icon-heart"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <ul className="flex flex-col gap-2 leading-normal text-secondary mb-4">
                <li>
                  <p>
                    Speaks:{" "}
                    <span className="underline text-primary">
                      {el.languages.join(", ")}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Lesson Info:{" "}
                    <span className="text-primary">{el.lesson_info}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Conditions:{" "}
                    <span className="text-primary">{el.conditions}</span>
                  </p>
                </li>
              </ul>
              <button
                className="leading-normal underline cursor-pointer mb-8"
                type="button"
              >
                Read more
              </button>
              <ul className="flex gap-2">
                {el.levels.map((el, idx) => {
                  return (
                    <li
                      className={`${idx === 0 ? "bg-yellow" : "border border-[rgba(18, 20, 23, 0.2)]"} rounded-[35px] py-2 px-3`}
                      key={idx}
                    >
                      #{el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TeachersList;
