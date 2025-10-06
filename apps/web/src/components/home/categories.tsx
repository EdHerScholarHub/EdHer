import { CATEGORIES } from "../../constants";
import CategoryItem from "./category-item";

export default function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      {
        CATEGORIES.map(category => (
          <CategoryItem
            key={category.title}
            {...category}
          />
        ))
      }
    </div>
  );
}
