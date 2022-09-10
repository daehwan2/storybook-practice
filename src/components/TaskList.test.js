/* eslint-disable */
import { render } from "@testing-library/react";

// 이 라이브러리를 못찾네.. 테스트 실팬데 일단 넘어감
import { composeStories } from "@storybook/testing-react";

import * as TaskListStories from "./TaskList.stories";

const { WithPinnedTasks } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task6(pinned)"]'
    )
  ).not.toBe(null);
});
