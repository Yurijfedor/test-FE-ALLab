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
    dispatch(toggleFavorite(id));
  };

  const FavoriteState = isFavorite.find(
    (item) => item.id === id && item.isFavorite === true
  );

  return FavoriteState?.isFavorite === true ? (
    <BsFillBookmarkFill
      fill="yellow"
      stroke="#70778B"
      strokeWidth="1px"
      onClick={toggleIsFavoriteState}
    />
  ) : (
    <BsFillBookmarkFill
      fill="white"
      stroke="#70778B"
      strokeWidth="1px"
      onClick={toggleIsFavoriteState}
    />
  );
};
