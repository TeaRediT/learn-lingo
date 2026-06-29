"use client";

import Container from "@/components/common/Container/Container";
import TeachersList from "@/components/TeachersList/TeachersList";
import { fetchTeachers } from "@/lib/api";
import { Teacher } from "@/types/teachers";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Language = "French" | "English" | "German" | "Ukrainian" | "Polish" | null;
type LvlLang =
  | "A1 Beginner"
  | "A2 Elementary"
  | "B1 Intermediate"
  | "B2 Upper-Intermediate"
  | "C1 Advanced"
  | "C2 Proficient"
  | null;
type Price = "10" | "20" | "30" | "40" | null;

const TeachersClient = () => {
  const [language, setLanguage] = useState<Language>(null);
  const [lvlLang, setLvlLang] = useState<LvlLang>(null);
  const [price, setPrice] = useState<Price>(null);

  const { data } = useQuery({
    queryKey: ["teachers"],
    queryFn: fetchTeachers,
    refetchOnMount: false,
  });

  let teachers: Teacher[] = data ? Object.values(data).filter(Boolean) : [];

  if (language || lvlLang || price) {
    teachers = teachers.filter((el) => {
      const matchLang = language ? el.languages.includes(language) : true;
      const matchLvlLang = lvlLang ? el.levels.includes(lvlLang) : true;
      const matchPrice = price ? el.price_per_hour.toString() === price : true;

      return matchLang && matchLvlLang && matchPrice;
    });
  }

  return (
    <main className="bg-[#f8f8f8]">
      <h1 className="sr-only">Teachers Catalog</h1>
      <section className="search-section mt-7 mb-8">
        <Container size="md">
          <h2 className="sr-only">Teachers Search</h2>
          <form className="flex justify-center border">
            <label htmlFor="1">1</label>
            <input name="1" type="text" />
            <label htmlFor="1">2</label>
            <input name="2" type="text" />
            <label htmlFor="1">3</label>
            <input name="3" type="text" />
          </form>
        </Container>
      </section>
      <section className="catalog-section">
        <Container size="md">
          <h2 className="sr-only">Teachers List</h2>
          {teachers.length > 0 && <TeachersList teachers={teachers} />}
        </Container>
      </section>
    </main>
  );
};

export default TeachersClient;
