// import node module
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faToggleOn,
    faUser,
    faBookmark,
    faLitecoinSign,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
// import file
import Button from '~/components/Button';
import image from '~/assets/images';
import Styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu/index';
import { IconInbox, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import config from '~/configs';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        iconRight: <FontAwesomeIcon icon={faToggleOn} />,
    },
];

const USER_LOGIN = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faLitecoinSign} />,
        title: 'Get Coins',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        title: 'Logout',
        separate: true,
    },
];
const cx = classNames.bind(Styles);
const currentUser = true;
function Header() {
    const handleManuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* LOGO */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </Link>
                {/* SEARCH */}
                <Search />
                {/* ACTION */}
                <div className={cx('action')}>
                    {currentUser ? (
                        // login
                        <>
                            <Button outlineBlack leftIcon={<FontAwesomeIcon className={cx('faplus')} icon={faPlus} />}>
                                Up load
                            </Button>
                            <Tippy
                                // trigger="click"
                                content="Messages"
                                placement="bottom"
                                className={cx('tippy')}
                            >
                                <button className={cx('faPaperPlane')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                // trigger="click"
                                content="Inbox"
                                placement="bottom"
                                className={cx('tippy')}
                            >
                                <button className={cx('faBell')}>
                                    <IconInbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // logup
                        <>
                            <Button outlineBlack leftIcon={<FontAwesomeIcon className={cx('faplus')} icon={faPlus} />}>
                                Up load
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {/* chung menu */}
                    <Menu items={currentUser ? USER_LOGIN : MENU_ITEMS} onChange={handleManuChange}>
                        {currentUser ? (
                            // login
                            <Image
                                alt="nguyenvana"
                                className={cx('avatar')}
                                src="https://vtv1.mediacdn.vn/zoom/640_400/2022/12/19/221218184732-messi-wc-trophy-16714338650611943125261-crop-1672061255342223645900.jpg"
                                fallback={image.fallbackLogo}
                            />
                        ) : (
                            // logup

                            <button className={cx('threedots')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
