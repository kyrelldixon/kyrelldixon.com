import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";

export default function PortableText({ blocks }) {
  return <BasePortableText blocks={blocks} serializers={serializers} />;
}
