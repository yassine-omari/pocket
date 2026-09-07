import type { ReactNode } from "react";

export type FeatureHeader = { title: string; subheading: ReactNode };

type FeatureHeaderTextProps = {
  header: FeatureHeader;
};

export const FeatureHeaderText = ({ header }: FeatureHeaderTextProps) => (
  <>
    <h2 className="text-2xl leading-8 font-normal">{header.title}</h2>
    <p className="text-sm text-gray-500 leading-6 font-normal">{header.subheading}</p>
  </>
);

type FeatureScreenProps = {
  header: FeatureHeader;
  content: ReactNode;
};

const FeatureScreen = ({ header, content }: FeatureScreenProps) => (
  <>
    <div className="mt-6 px-4 text-white">
      <FeatureHeaderText header={header} />
    </div>
    <div className="mt-6 flex-auto rounded-t-2xl bg-white">{content}</div>
  </>
);

export default FeatureScreen;
