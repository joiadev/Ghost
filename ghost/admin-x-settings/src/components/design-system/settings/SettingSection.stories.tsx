import type {Meta, StoryObj} from '@storybook/react';

import SettingSection from './SettingSection';
import SettingGroup from './SettingGroup';
import * as SettingGroupStories from './SettingGroup.stories';

const meta = {
    title: 'Settings / Setting section',
    component: SettingSection,
    tags: ['autodocs'],
    decorators: [(_story: any) => <div style={{maxWidth: '780px'}}>{_story()}</div>],
} satisfies Meta<typeof SettingSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Section header',
        children: 
        <>
            <SettingGroup {...SettingGroupStories.Default.args} />
            <SettingGroup {...SettingGroupStories.Editing.args} />
            <SettingGroup {...SettingGroupStories.Unsaved.args} />
        </>
    }
};