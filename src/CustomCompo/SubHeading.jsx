

const SubHeading = ({title, subTitle}) => {
    return (
        <div className="text-center my-12">
            <h2 className="uppercase text-3xl font-serif text-[#3fd43f]">{title}</h2>
            <p className="uppercase font-serif font-thin text-[orange]">{subTitle}</p>
        </div>
    );
};

export default SubHeading;