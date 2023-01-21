import Container from "@/ui/container";
import withFont from "@/ui/withFont";

const Root = withFont(Container);

export default function HomePage() {
  return (
    <Root className="text-red-900">
      <div className="font-main">djamel abbou</div>
    </Root>
  );
}
