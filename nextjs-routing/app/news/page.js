import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list/news-list";

export default function NewsPage() {
  return (
    <div>
      <h1>The NEWS Page</h1>
      <div>
        <NewsList news={DUMMY_NEWS}></NewsList>
      </div>
    </div>
  );
}
