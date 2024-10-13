import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { setLoading } from "./redux/LoadingSlice";
import { useDispatch, useSelector } from 'react-redux';

const ConfirmDelete = ({ onDelete }) => {
  const loading = useSelector(state => state.LoadingSlice.isLoading);
  const dispatch = useDispatch();


  return (
    <AlertDialog>
  <AlertDialogTrigger className='bg-red-500 p-2 text-white' disabled={loading}>
  {loading ? "Deleting..." : "Delete"}
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction  onClick={onDelete}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  );
};

export default ConfirmDelete;
