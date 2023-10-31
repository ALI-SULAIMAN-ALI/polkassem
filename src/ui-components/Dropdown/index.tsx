// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Dropdown as AntdDropdown } from 'antd';

export const Dropdown = (props: any) => {
	return (
		<AntdDropdown
			{...props}
			overlayClassName={`dark:bg-section-dark-overlay dark:border-separatorDark dark:rounded-lg dark:text-white ${
				props.theme == 'dark'
					? '[&>ul]:bg-section-dark-background [&>ul>li]:text-white [&>ul>.ant-dropdown-menu-item-selected]:bg-section-dark-background [&>ul>.ant-dropdown-menu-item-selected]:text-[#5A1138] hover:[&>ul>li]:bg-section-dark-background hover:[&>ul>li]:text-pink-dark-primary'
					: ''
			}`}
		>
			{props.children}
		</AntdDropdown>
	);
};
