import propTypes from "prop-types";

export default function CategoryCard({ data }) {
  return (
    <div className="h-[350px] w-[350px] bg-white shadow-md">
      <a href="" className="text-decoration-none text-[#232323]">
        <span>
          <h2 className="p-[5px] ml-[15px]">{data.title}</h2>
        </span>
        <img
          src={data.imgLink}
          alt={data.name}
          className="w-full object-contain max-h-[250px] px-2.5"
        />
        <p className="p-[5px] ml-[15px] text-xs font-bold text-[#0984d1]">
          shop now
        </p>
      </a>
    </div>
  );
}

CategoryCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    imgLink: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};
