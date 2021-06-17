import {SearchProps} from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import {Input} from "../Input/Input";
import SearchIcon from './glass.svg';
import React, {useState} from "react";
import {Button} from "../Button/Button";
import {useRouter} from "next/router";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const resultSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            resultSearch();
        }
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleEnter}
            />
            <Button
                appereance='primary'
                className={styles.button}
                onClick={resultSearch}
            >
                <SearchIcon/>
            </Button>
        </div>
    );
};