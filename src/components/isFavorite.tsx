import { BsFillBookmarkFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleFavorite } from "../redux/jobFavoriteSlice";

interface IProps {
  id: string;
}

export const IsFavorite: React.FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => state.isFavorite);

  const toggleIsFavoriteState: React.MouseEventHandler<SVGElement> = (e) => {
    if (e.currentTarget.style.fill === "yellow") {
      e.currentTarget.style.fill = "white";
    } else {
      e.currentTarget.style.fill = "yellow";
    }
    dispatch(toggleFavorite(id));
  };
  console.log(isFavorite);

  const FavoriteState = isFavorite.find(
    (item) => item.id === id && item.isFavorite === true
  );

  console.log(FavoriteState);

  return FavoriteState?.isFavorite === true ? (
    <BsFillBookmarkFill
      fill="yellow"
      stroke="black"
      strokeWidth="1px"
      onClick={toggleIsFavoriteState}
    />
  ) : (
    <BsFillBookmarkFill
      fill="white"
      stroke="black"
      strokeWidth="1px"
      onClick={toggleIsFavoriteState}
    />
  );
};
