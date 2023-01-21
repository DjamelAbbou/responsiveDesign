import Container from "@/ui/container";
import withFont from "@/ui/withFont";

const Root = withFont(Container);

export default function HomePage() {
  return <Root className="font-main"></Root>;
}
