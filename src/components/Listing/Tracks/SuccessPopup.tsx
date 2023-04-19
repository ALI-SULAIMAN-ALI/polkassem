// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Modal } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import CloseIcon from '~assets/icons/close.svg';
import SuccessIcon from '~assets/delegation-tracks/success-delegate.svg';
import UndelegateCloseIcon from '~assets/icons/white-close.svg';
import { poppins } from 'pages/_app';
import BN from 'bn.js';
import formatBnBalance from '~src/util/formatBnBalance';
import { useNetworkContext } from '~src/context';
import Address from '~src/ui-components/Address';

interface Props{
  className?: string;
  open: boolean;
  setOpen: (pre:boolean) => void;
  tracks?: CheckboxValueType[];
  address?: string;
  isDelegate?: boolean;
  balance?: BN;
}

const SuccessPopup = ({ className, open, setOpen, tracks, address ,isDelegate, balance }: Props) => {

	const { network } = useNetworkContext();
	return <Modal
		open={open}
		className={`${poppins.variable} ${poppins.className} ${isDelegate ? 'delegate' : 'undelegate'}`}
		wrapClassName={className}
		closeIcon={isDelegate ? <CloseIcon/> : <UndelegateCloseIcon/>}
		onCancel={() => setOpen(false)}
		centered
		footer={false}
	>
		<div className='flex justify-center items-center flex-col -mt-[132px]'>
			<SuccessIcon/>
			<h2 className='text-[20px] font-semibold tracking-[0.0015em]'>{isDelegate ? 'Delegated successfully' : 'Undelegated successfully' }</h2>
			{isDelegate && <div className='flex flex-col justify-center items-center gap-[18px]'>
				{balance && <div className='text-pink_primary text-[24px] font-semibold'>{formatBnBalance(balance, { numberAfterComma: 2, withUnit:true }, network)}</div>}
				<div className='flex-col flex items-start justify-center gap-[10px]'>
					{address && <div className='flex gap-4 text-sm text-[#485F7D]'>To address:<span>
						<Address address={address}
							className='address'
							displayInline={true}/>
					</span>
					</div>}
					{tracks && <div className='flex gap-[35px] text-sm text-[#485F7D]'>Track(s):<span>
						<div className={`flex flex-col gap-1 h-[100px] text-[#243A57] pr-2 font-medium ${tracks.length > 4 && 'overflow-y-scroll'}`}>{tracks.map((track, index) => (<div key={index}>{track}</div>))}</div>
					</span>
					</div>}</div>
			</div>}
		</div>

	</Modal>;
};

export default SuccessPopup;
