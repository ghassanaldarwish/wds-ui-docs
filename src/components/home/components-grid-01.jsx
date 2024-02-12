import { Index } from "../registry";
import MotionComponent from "./motion-component";

import ComponentPreview from "./component-preview";

function ComponentsGrid01() {
  return (
    <MotionComponent className="container">
      <MotionComponent.Section className="" delay={1} duration={1}>
        <Index.accordion.component />

        <div className="flex flex-col gap-2 justify-center items-center ">
          <Index.button.component>Button</Index.button.component>
          <Index.avatar.component />
          <Index.badge.component>badge</Index.badge.component>
          <Index.combobox.component />
        </div>

        <div className="min-w-1/4">
          <ComponentPreview keyName="context-menu" />
        </div>

        <Index.alert.component />
      </MotionComponent.Section>

      <MotionComponent.Section className="">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <Index.button.component>Button</Index.button.component>
          <Index.avatar.component />
          <Index.badge.component>badge</Index.badge.component>
          <Index.combobox.component />
        </div>
      </MotionComponent.Section>

      <MotionComponent.Section className="">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <Index.button.component>Button</Index.button.component>
          <Index.avatar.component />
          <Index.badge.component>badge</Index.badge.component>
          <Index.combobox.component />
        </div>
      </MotionComponent.Section>

      <MotionComponent.Section className="">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <Index.button.component>Button</Index.button.component>
          <Index.avatar.component />
          <Index.badge.component>badge</Index.badge.component>
          <Index.combobox.component />
        </div>
      </MotionComponent.Section>
    </MotionComponent>
  );
}

export default ComponentsGrid01;
