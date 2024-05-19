import Link from "next/link";

const mockUrls = [ 
  "https://utfs.io/f/514b1019-199e-4d91-86c5-e7f85bf2a664-hev0t6.webp",
  "https://utfs.io/f/2f9c465e-8a1c-4120-b51a-474c055f48f8-gn5d08.webp",
  "https://utfs.io/f/9a41f746-c97a-4b44-9a42-fc7013887663-w032mm.webp",
  "https://utfs.io/f/b125bd6e-00e6-4600-ad31-597b821531e5-repwxf.webp",
  "https://utfs.io/f/10cdbb20-9c42-41e5-993f-e89c5982eec1-udmwbs.webp",
  "https://utfs.io/f/3cebae0c-5562-45cf-9d49-17d9cc8c2514-50ual5.webp",
]

const mockImages = mockUrls.map((url, index) =>({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => 
          <div key={image.id} className="w-96 p-4">
            <img src={image.url} alt="image"/>
          </div>
        )}
      </div>
      <h1>hello world</h1>
    </main>
  );
}
