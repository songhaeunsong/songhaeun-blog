import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { theme } from "@/theme";

interface PaginationProps {
  count: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}
const Pagination = ({
  count,
  handlePagination,
  currentPage,
}: PaginationProps) => {
  return (
    <PaginationRoot
      count={count}
      pageSize={7}
      defaultPage={currentPage}
      onPageChange={(details) => handlePagination(details.page)}
    >
      <HStack>
        <PaginationPrevTrigger color={theme.pointColor} />
        <PaginationItems color={theme.pointColor} />
        <PaginationNextTrigger color={theme.pointColor} />
      </HStack>
    </PaginationRoot>
  );
};

export default Pagination;
