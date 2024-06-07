

type Props = {
    children: React.ReactNode;
  }
  
  const AdminLayout = ({ children }: Props) => {
    return (
      <>
        <main className="px-2 lg:px-10">
          {children}
        </main>
      </>
    );
  }
  
  export default AdminLayout;
