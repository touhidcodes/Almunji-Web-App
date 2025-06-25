import { Button } from "@/components/ui/button";
import Providers from "@/providers/providers";

const Page = () => {
  return (
    <Providers>
      <div>
        <h2>Welcome to the Page page</h2>
        <Button>Click me</Button>
      </div>
    </Providers>
  );
};

export default Page;
