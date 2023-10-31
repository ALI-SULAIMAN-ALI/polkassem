// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';
import getSubstrateAddress from '~src/util/getSubstrateAddress';
import { DeriveAccountRegistration } from '@polkadot/api-derive/types';
import CopyIcon from '~assets/icons/content_copy_small.svg';
import copyToClipboard from '~src/util/copyToClipboard';
import { poppins } from 'pages/_app';
import Address from './Address';
import dayjs from 'dayjs';
import SocialLink from './SocialLinks';
import { socialLinks } from '~src/components/UserProfile/Details';
import { message } from 'antd';
import styled from 'styled-components';
import VerifiedIcon from '~assets/icons/verified-tick.svg';
import JudgementIcon from '~assets/icons/judgement-icon.svg';
import ShareScreenIcon from '~assets/icons/share-icon-new.svg';
import { MinusCircleFilled } from '@ant-design/icons';
import { useNetworkSelector } from '~src/redux/selectors';
import { ISocial } from '~src/auth/types';
import ImageComponent from 'src/components/ImageComponent';

interface Props {
	className?: string;
	address: string;
	identity?: DeriveAccountRegistration | null;
	polkassemblyUsername?: string;
	username: string;
	imgUrl?: string;
	profileCreatedAt?: Date;
	socials?: ISocial[];
}
const QuickView = ({ className, address, identity, username, polkassemblyUsername, imgUrl, profileCreatedAt, socials }: Props) => {
	const judgements = identity?.judgements.filter(([, judgement]): boolean => !judgement.isFeePaid);
	const isGood = judgements?.some(([, judgement]): boolean => judgement.isKnownGood || judgement.isReasonable);
	const isBad = judgements?.some(([, judgement]): boolean => judgement.isErroneous || judgement.isLowQuality);
	const [messageApi, contextHolder] = message.useMessage();

	const { network } = useNetworkSelector();
	const identityArr = [
		{ isVerified: !!identity?.email, key: 'Email', value: identity?.email || socials?.find((social) => social.type === 'Email')?.link || '' },
		{ isVerified: !!identity?.judgements, key: 'Judgements', value: identity?.judgements || [] },
		{ isVerified: !!identity?.legal, key: 'Legal', value: identity?.legal },
		{ isVerified: !!identity?.riot, key: 'Riot', value: identity?.riot || socials?.find((social) => social.type === 'Riot')?.link || '' },
		{ isVerified: !!identity?.twitter, key: 'Twitter', value: identity?.twitter || socials?.find((social) => social.type === 'Twitter')?.link || '' },
		{ isVerified: !!identity?.web, key: 'Web', value: identity?.web },
		{ isVerified: false, key: 'Telegram', value: socials?.find((social) => social.type === 'Telegram')?.link || '' }
	];
	const color: 'brown' | 'green' | 'grey' = isGood ? 'green' : isBad ? 'brown' : 'grey';
	const success = () => {
		messageApi.open({
			content: 'Address copied to clipboard',
			duration: 10,
			type: 'success'
		});
	};

	return (
		<div
			className={`${poppins.variable} ${poppins.className} flex flex-col gap-1.5 ${className} border-solid pb-2`}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
			}}
		>
			<div className='flex flex-col gap-1.5 px-4'>
				<ImageComponent
					src={imgUrl}
					alt='User Picture'
					className='-mt-[50px] flex h-[98px] w-[98px] rounded-full border-[2px] border-solid border-white bg-white'
				/>
				<div className='mt-0 flex items-center justify-start gap-2'>
					<span className='text-xl font-semibold tracking-wide text-bodyBlue'>{username?.length > 20 ? `${username?.slice(0, 20)}...` : username}</span>
					<div className='flex items-center justify-center'>{isGood ? <VerifiedIcon /> : <MinusCircleFilled style={{ color }} />}</div>
					<a
						target='_blank'
						rel='noreferrer'
						className='flex text-pink_primary'
						onClick={() => {
							const substrateAddress = getSubstrateAddress(address);
							if (!polkassemblyUsername?.length) {
								window.open(`https://${network}.polkassembly.io/address/${substrateAddress || address}`, '_blank');
							} else {
								window.open(`https://${network}.polkassembly.io/user/${polkassemblyUsername}`, '_blank');
							}
						}}
					>
						<ShareScreenIcon />
					</a>
				</div>
				<div className='flex items-center gap-1 text-xs text-bodyBlue'>
					<Address
						address={address}
						disableHeader
						iconSize={20}
						addressMaxLength={5}
						addressClassName='text-sm'
						disableTooltip
					/>
					<span
						className='flex cursor-pointer items-center'
						onClick={(e) => {
							e.preventDefault();
							copyToClipboard(address);
							success();
						}}
					>
						{contextHolder}
						<CopyIcon />
					</span>
				</div>
				<div className='mt-0.5 flex items-center justify-between gap-1 border-solid'>
					<span className='flex items-center text-xs tracking-wide text-[#9aa7b9]'>
						Since:<span className='ml-0.5 text-lightBlue '>{dayjs(profileCreatedAt).format('MMM DD, YYYY')}</span>
					</span>
					<div className='flex items-center gap-1.5'>
						{socialLinks?.map((social: any, index: number) => {
							const link = identityArr?.find((s) => s.key === social)?.value || '';
							const isVerified = identityArr.find((s) => s.key === social)?.isVerified || false;
							return (
								link && (
									<div
										title={link ? String(link) : ''}
										key={index}
									>
										<SocialLink
											className={`flex h-[24px] w-[24px] items-center justify-center rounded-[20px] text-base hover:text-[#576D8B] ${isVerified ? 'bg-[#51D36E]' : 'bg-[#edeff3]'}`}
											link={link as string}
											type={social}
											iconClassName={`text-sm ${isVerified ? 'text-white' : 'text-[#96A4B6]'}`}
										/>
									</div>
								)
							);
						})}
					</div>
				</div>
			</div>
			<article className='mt-2 flex h-11 items-center justify-center gap-1 rounded-lg border-[0.5px] border-solid border-[#EEF2F6] bg-[#F4F8FF] px-3 text-xs text-bodyBlue'>
				<div className='flex items-center gap-1 font-medium text-lightBlue'>
					<JudgementIcon />
					<span>Judgements:</span>
				</div>
				<span className='text-bodyBlue'>
					{judgements
						?.map(([, jud]) => jud.toString())
						.join(', ')
						?.split(',')?.[0] || 'None'}
				</span>
			</article>
		</div>
	);
};

export default styled(QuickView)`
	.judgments {
		display: inline list-item;
	}
`;
