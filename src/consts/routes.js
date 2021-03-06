const searchResults = [
  { value: "asosiy", redirect: "/" },
  { value: "home", redirect: "/" },
  { value: "главная", redirect: "/" },
  { value: "об институте", redirect: "/about" },
  { value: "ABOUT THE INSTITUTE", redirect: "/about" },
  { value: "INSTITUT HAQIDA", redirect: "/about" },
  { value: "Структура института", redirect: "/about/structura" },
  { value: "Institute structure", redirect: "/about/structura" },
  { value: "Institut tuzilishi", redirect: "/about/structura" },
  { value: "Устав", redirect: "/about/charter" },
  { value: "Charter", redirect: "/about/charter" },
  { value: "Nizom", redirect: "/about/charter" },
  { value: "Финансовые и экономические показатели", redirect: "/about/financial" },
  { value: "Financial and economic indicators", redirect: "/about/financial" },
  { value: "Moliyaviy-iqtisodiy ko'rsatkichlar", redirect: "/about/financial" },
  { value: "Руководство", redirect: "/about/governance" },
  { value: "Management", redirect: "/about/governance" },
  { value: "Boshqaruv", redirect: "/about/governance" },
  { value: "История института", redirect: "/about/history" },
  { value: "History of the Institute", redirect: "/about/history" },
  { value: "Institut tarixi", redirect: "/about/history" },
  { value: "Миссия и политика", redirect: "/about/politics" },
  { value: "Mission and policy", redirect: "/about/politics" },
  { value: "Missiya va siyosat", redirect: "/about/politics" },
  { value: "Сотрудничество", redirect: "/about/cooperation" },
  { value: "Cooperation", redirect: "/about/cooperation" },
  { value: "Hamkorlik", redirect: "/about/cooperation" },
  { value: "История и руководство", redirect: "/about/management" },
  { value: "History and leadership", redirect: "/about/management" },
  { value: "Tarix va etakchilik", redirect: "/about/management" },
  { value: "Деятельность", redirect: "/activity" },
  { value: "Activity", redirect: "/activity" },
  { value: "Faoliyat", redirect: "/activity" },
  { value: "Научная деятельность", redirect: "/activity/scientific" },
  { value: "Scientific activity", redirect: "/activity/scientific" },
  { value: "Ilmiy faoliyat", redirect: "/activity/scientific" },
  { value: "Производственная деятельность", redirect: "/activity/production" },
  { value: "Production activity", redirect: "/activity/production" },
  { value: "Ishlab chiqarish faoliyati", redirect: "/activity/production" },
  { value: "Образование", redirect: "/activity/education" },
  { value: "Education", redirect: "/activity/education" },
  { value: "Ta'lim", redirect: "/activity/education" },
  { value: "Функции центров", redirect: "/laboratories/functions" },
  { value: "Functions of the centers", redirect: "/laboratories/functions" },
  { value: "Markazlarning vazifalari", redirect: "/laboratories/functions" },
  { value: "Гидроминеральные ресурсы", redirect: "/laboratories/uran" },
  { value: "Hydromineral resources", redirect: "/laboratories/uran" },
  {
    value: "Gidromineral resurslar",
    redirect: "/laboratories/uran",
  },
  {
    value: "Мелиоративная гидрогеология и дренаж",
    redirect: "/laboratories/ameliorative",
  },
  {
    value: "Ameliorative hydrogeology and drainage",
    redirect: "/laboratories/ameliorative",
  },
  {
    value: "Meliorativ gidrogeologiya va drenaj",
    redirect: "/laboratories/ameliorative",
  },
  { value: "Ресурсы и запасы подземных вод", redirect: "/laboratories/resources" },
  { value: "Resources and reserves of groundwater", redirect: "/laboratories/resources" },
  {
    value: "Er osti suvlarining resurslari va zahiralari",
    redirect: "/laboratories/resources",
  },
  { value: "Геоэкология", redirect: "/laboratories/geoecology" },
  { value: "Geoecology", redirect: "/laboratories/geoecology" },
  { value: "Geoekologiya", redirect: "/laboratories/geoecology" },
  {
    value: "Геоинформационные технологии и моделирование",
    redirect: "/laboratories/modeling",
  },
  {
    value: "Geoinformation technologies and modeling",
    redirect: "/laboratories/modeling",
  },
  {
    value: "Geoaxborot texnologiyalari va modellashtirish",
    redirect: "/laboratories/modeling",
  },
  {
    value: "Мониторинг подземных вод и региональные исследования",
    redirect: "/laboratories/groundwater",
  },
  {
    value: "Groundwater monitoring and regional studies",
    redirect: "/laboratories/groundwater",
  },
  {
    value: "Er osti suvlari monitoringi va mintaqaviy tadqiqotlar",
    redirect: "/laboratories/groundwater",
  },
  { value: "Геоэколого-химическая лаборатория", redirect: "/laboratories/chemical" },
  {
    value: "Geoecological and chemical laboratory",
    redirect: "/laboratories/chemical",
  },
  { value: "Geoekologik va kimyoviy laboratoriya", redirect: "/laboratories/chemical" },
  { value: "Маркетинг и патентоведение", redirect: "/" },
  { value: "Marketing and patenting", redirect: "/" },
  { value: "Marketing va patentlash", redirect: "/" },
  {
    value: "Отдел выпуска научно-технической продукции",
    redirect: "/laboratories/technical",
  },
  {
    value: "Department of scientific and technical production",
    redirect: "/laboratories/technical",
  },
  { value: "Ilmiy-texnik ishlab chiqarish bo'limi", redirect: "/laboratories/technical" },
  { value: "Отдел ИКТ", redirect: "/" },
  { value: "ICT department", redirect: "/" },
  { value: "AKT bo'limi", redirect: "/" },
  {
    value: "Инженерная геодинамика и дистанционное зондирование земли",
    redirect: "/laboratories/overture",
  },
  {
    value: "Engineering geodynamics and remote sensing of the earth",
    redirect: "/laboratories/overture",
  },
  {
    value: "Muhandislik geodinamika va yerni masofadan zondlash",
    redirect: "/laboratories/overture",
  },
  { value: "Гидрогеофизика", redirect: "/laboratories/hydrogeophysics" },
  { value: "Hydrogeophysics", redirect: "/laboratories/hydrogeophysics" },
  { value: "Gidrogeofizika", redirect: "/laboratories/hydrogeophysics" },
  {
    value: "Гидрогеология и инженерная геология рудных месторождений",
    redirect: "/laboratories/engineering",
  },
  {
    value: "Hydrogeology and engineering geology of ore deposits",
    redirect: "/laboratories/engineering",
  },
  {
    value: "Ruda konlarining gidrogeologiyasi va muhandislik geologiyasi",
    redirect: "/laboratories/engineering",
  },
  {
    value: "Гидрогеология и инженерная геология МТПИ",
    redirect: "/laboratories/hydrogeology",
  },
  {
    value: "Hydrogeology and engineering geology MTPI",
    redirect: "/laboratories/hydrogeology",
  },
  {
    value: "Gidrogeologiya va muhandislik geologiyasi MTPI",
    redirect: "/laboratories/hydrogeology",
  },
  { value: "НОРМАТИВНАЯ БАЗА", redirect: "/normatives" },
  { value: "NORMATIVE BASE", redirect: "/normatives" },
  { value: "NORMATIV BAZA", redirect: "/normatives" },
  { value: "КОНТАКТЫ", redirect: "/contacts" },
  { value: "CONTACTS", redirect: "/contacts" },
  { value: "ALOQALAR", redirect: "/contacts" },
];

export default searchResults;
