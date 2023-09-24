import Navbar from "@/components/Navbar";
import GlobeComponent from "../components/GlobeComponent";

function Index() {
  return (
    <>
      <Navbar />
      <h1 className="text-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        adipisci accusantium at ea earum est id recusandae fugit assumenda
        dignissimos quis quo sit blanditiis excepturi necessitatibus repellendus
        molestiae voluptatem, esse repellat quibusdam quos maxime deserunt!
        Ratione dicta vitae eveniet impedit, recusandae accusamus incidunt
        molestiae blanditiis ad, enim, voluptatibus labore facilis!
      </h1>
      <GlobeComponent />
    </>
  );
}

export default Index;
