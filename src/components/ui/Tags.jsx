const Tags = ({ tag }) => {
  return (
    <span className="bg-accent-light dark:bg-accent-dark text-white px-2.5 rounded-lg select-none hover:bg-[#f48b8b] dark:hover:bg-[#13605b] hover:text-fontColor-light dark:hover:text-fontColor-dark transition-all duration-75">
      {tag}
    </span>
  );
};
export default Tags;
