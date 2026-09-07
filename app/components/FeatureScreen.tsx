import type { ReactNode } from "react";

type FeatureScreenProps = {
  header: { title: string; subheading: ReactNode };
  content: ReactNode;
};

const FeatureScreen = ({ header, content }: FeatureScreenProps) => (
  <>
    <div className="mt-6 px-4 text-white">
      <h2 className="text-2xl leading-8 font-normal">{header.title}</h2>
      <p className="text-sm text-gray-500 leading-6 font-normal">
        {header.subheading}
      </p>
    </div>
    <div className="mt-6 flex-auto rounded-t-2xl bg-white">{content}</div>
  </>
);

export default FeatureScreen;
