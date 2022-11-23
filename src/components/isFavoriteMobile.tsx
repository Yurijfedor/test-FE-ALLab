import { FaStar } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleFavorite } from "../redux/jobFavoriteSlice";

interface IProps {
  id: string;
}

export const IsFavoriteMobile: React.FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => state.isFavorite);

  const toggleIsFavoriteState: React.MouseEventHandler<SVGElement> = (e) => {
    dispatch(toggleFavorite(id));
  };

  const FavoriteState = isFavorite.find(
    (item) => item.id === id && item.isFavorite === true
  );

  return FavoriteState?.isFavorite === true ? (
    <FaStar
      fill="yellow"
      stroke="#70778B"
      strokeWidth="50px"
      onClick={toggleIsFavoriteState}
    />
  ) : (
    <FaStar
      fill="white"
      stroke="#70778B"
      strokeWidth="50px"
      onClick={toggleIsFavoriteState}
    />
  );
};
