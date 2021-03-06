import { Header, Layout, Modal, Pagination, Table } from "@/components/employee";

function Landing() {
  return (
      <Layout>
        <Header />
        <Table />
        <Pagination />
        <Modal />
      </Layout>
  );
}

export default Landing;