import type { Metadata } from 'next';
import { EditableList } from '@/app/components/editableList/EditableList';

export default function IndexPage() {
  return <EditableList />;
}

export const metadata: Metadata = {
  title: 'Editable list',
};
