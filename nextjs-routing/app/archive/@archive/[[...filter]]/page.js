import NewsList from "@/components/news-list/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);

  const selecteYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selecteYear && !selectedMonth) {
    news = getNewsForYear(selecteYear);
    links = getAvailableNewsMonths(selecteYear);
  }
  if (selecteYear && selectedMonth) {
    news = getNewsForYearAndMonth(selecteYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news available for the selected period</p>;

  if (news && news.length) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selecteYear && !getAvailableNewsYears().includes(+selecteYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selecteYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filter!!");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selecteYear
                ? `/archive/${selecteYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
