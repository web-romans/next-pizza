import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
    </Container>

    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">
        <div className="w-[250px] flex-shrink-0">
          <Filters />
        </div>

        <div className="flex flex-col gap-[100px]">

          <ProductsGroupList
            title="Пиццы"
            categoryId={1}
            items={[
              {
                id: 1,
                name: 'Мясная',
                imageUrl: '/myasnaya.png',
                items: [{ price: 550 }]
              },
              {
                id: 2,
                name: 'Мясная',
                imageUrl: '/myasnaya.png',
                items: [{ price: 550 }]
              },
              {
                id: 3,
                name: 'Мясная',
                imageUrl: '/myasnaya.png',
                items: [{ price: 550 }]
              },
            ]}
          />

          <ProductsGroupList
            title="Комбо"
            categoryId={2}
            items={[
              {
                id: 4,
                name: 'Мясная',
                imageUrl: '/myasnaya.png',
                items: [{ price: 550 }]
              },
              {
                id: 5,
                name: 'Мясная',
                imageUrl: '/myasnaya.png',
                items: [{ price: 550 }]
              },
              {
                id: 6,
                name: 'Мясная',
                imageUrl: '/myasnaya.png',
                items: [{ price: 550 }]
              },
            ]}
          />

        </div>
      </div>
    </Container>

  </>;
}
