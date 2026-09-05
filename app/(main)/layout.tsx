import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
