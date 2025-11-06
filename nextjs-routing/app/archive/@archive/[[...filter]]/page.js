import NewsList from "@/components/news-list/news-list";
import {
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

  if (selecteYear && !selectedMonth) {
    news = getNewsForYear(selecteYear);
  }
  if (selecteYear && selectedMonth) {
    news = getNewsForYearAndMonth(selecteYear, selectedMonth);
  }

  let newsContent = <p>No news available for the selected period</p>;

  if (news && news.length) {
    newsContent = <NewsList news={news} />;
  }

  const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
