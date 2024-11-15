import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Note } from '@/modules/notes/note';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchModalProps {
  isOpen: boolean;
  notes: Note[];
  onItemSelect: (noteId: number) => void;
  onKeywordChanged: (keyword: string) => void;
  onClose: () => void;
}

export function SearchModal({
  isOpen,
  notes,
  onItemSelect,
  onKeywordChanged,
  onClose,
}: SearchModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const debounced = useDebouncedCallback(onKeywordChanged, 500);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <Command shouldFilter={false}>
        <CommandInput
          placeholder={'キーワードで検索'}
          onValueChange={debounced}
        />
        <CommandList>
          <CommandEmpty>条件に一致するノートがありません</CommandEmpty>
          <CommandGroup>
            {notes?.map((note) => (
              <CommandItem
                key={note.id}
                title={note.displayTitle}
                onSelect={() => onItemSelect(note.id)}
              >
                <span>{note.displayTitle}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
