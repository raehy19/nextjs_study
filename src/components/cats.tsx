const Cats = ({ catList }: any) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {catList.map((item: any) => (
          <img src={item.url} width={500} />
        ))}
      </div>
    </div>
  );
};

export default Cats;
