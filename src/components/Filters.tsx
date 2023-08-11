import styled from 'styled-components';
import { useStore } from '../store/Store';
import { FilterTag } from './UI/FilterTag';
import { TFilters } from '../store/TypesStore';

const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
`;

const tags: { readonly [k in TFilters]: string } = {
    all: 'All',
    completed: 'Completed',
    notCompleted: 'Not Completed',
}

export const Filters = () => {
    const setFilter = useStore(store => store.setFilter);
    const activeFilter = useStore(store => store.activeFilter);

    const filterTags = (Object.keys(tags) as TFilters[]).map(tag => (
        <FilterTag
            key={tag}
            active={activeFilter === tag}
            onClick={() => {
                setFilter(tag);
            }}
        >
            {tags[tag]}
        </FilterTag>
    ));

    return <FilterWrapper>{filterTags}</FilterWrapper>;
};
