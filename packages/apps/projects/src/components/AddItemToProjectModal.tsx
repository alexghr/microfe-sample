import React from 'react';
import styled from 'styled-components';
import { PinnedItem, ProjectItemType } from '../models/project';

const AddItemToProjectModal: React.FC = () => {
    const [itemToAdd, setItemToAdd] = React.useState<PinnedItem | undefined>(undefined);
    const [{ ItemComponent }, setItemComponent] = React.useState<{ ItemComponent: React.ComponentType<{id : string}> | undefined }>({
        ItemComponent: undefined
    });
    const handleClose = React.useCallback(() => setItemToAdd(undefined), []);

    const open = !!itemToAdd;

    React.useEffect(() => {
        addEventListener('message', (ev) => {
            try {
                const data = JSON.parse(ev.data);
                if (data.event === 'projects:pin') {
                    setItemToAdd(data.item);
                }
            } catch (err) {
                return;
            }
        });
    }, []);

    React.useEffect(() => {
        if (!itemToAdd) {
            return;
        }

        if (itemToAdd.type === ProjectItemType.ARTICLE) {
            import('@alexghr/mfe-app-dashboard').then(pack => {
                setItemComponent({ ItemComponent: pack['ArticleCard'] });
            })
        }
    }, [itemToAdd]);

    return (
        <>
            <Background open={open} />
            <Element open={open}>
                <div>
                    <button onClick={handleClose}>x</button>
                    {ItemComponent && itemToAdd && <ItemComponent id={itemToAdd.id} />}
                </div>
            </Element>
        </>
    )
};

export default AddItemToProjectModal;

const Background = styled.div<{ open: boolean }>`
  display: block;
  position: fixed;
  transition: all 100ms ease-out;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? 1 : 0};
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Element = styled.div<{ open: boolean }>`
  display: block;
  position: fixed;
  transition: all 100ms ease-out;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 320px;
  height: 480px;
  margin: auto;
  background: #fff;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? 1 : 0};
  z-index: 2;
`;
