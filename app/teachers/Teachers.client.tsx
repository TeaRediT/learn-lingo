"use client";

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

  let teachers = data ? Object.values(data).filter(Boolean) : [];

  if (language || lvlLang || price) {
    teachers = teachers.filter((el: Teacher) => {
      const matchLang = language ? el.languages.includes(language) : true;
      const matchLvlLang = lvlLang ? el.levels.includes(lvlLang) : true;
      const matchPrice = price ? el.price_per_hour.toString() === price : true;

      return matchLang && matchLvlLang && matchPrice;
    });
  }

  console.log(teachers);

  return <></>;
};

export default TeachersClient;
