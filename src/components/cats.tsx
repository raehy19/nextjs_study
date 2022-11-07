import Link from 'next/link';

const Cats = ({ catList }: any) => {
  console.log(catList);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {catList.map((item: any) => (
          <Link href={`details/${item.id}`}>
            <img src={item.url} width={500} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cats;
