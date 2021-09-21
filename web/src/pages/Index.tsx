import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import SiteLayout from "../components/common/SiteLayout";
import InfoStart from "../components/InfoStart";

const Index: React.FC = () => {
  const { error } = useTypedSelector((state) => state.auth);

  return (
    <SiteLayout>
      <InfoStart />
      {error}
    </SiteLayout>
  );
};

export default Index;
