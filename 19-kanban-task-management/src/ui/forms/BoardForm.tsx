import { useState } from "react";
import { IBoard } from "../../lib/types";
import { Input, Label } from "./FormComponents";

type BoardFormProps = {
  board?: IBoard;
  onSave(newBoard: IBoard): void;
};

export function BoardForm({ board, onSave }: BoardFormProps) {
  const [boardName, setBoardName] = useState(board?.name ?? "");
  const [columns, setColumns] = useState(board?.columns ?? []);

  const title = board ? "Edit Board" : "Add Board";

  function addColumn() {
    setColumns([...columns, { id: crypto.randomUUID(), name: "", tasks: [] }]);
  }

  function renameColumn(id: string, newName: string) {
    setColumns(
      columns.map((column) =>
        column.id === id ? { ...column, name: newName } : column,
      ),
    );
  }

  function deleteColumn(id: string) {
    setColumns(columns.filter((column) => column.id !== id));
  }

  return (
    <form
      className="mt-6 grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        onSave({
          id: board?.id ?? crypto.randomUUID(),
          name: boardName,
          columns,
        });
        if (!board) {
          setBoardName("");
          setColumns([]);
        }
      }}
    >
      <h2 className="text-heading-lg text-neutral-900">{title}</h2>
      <Label caption="Board Name">
        <Input
          placeholder="e.g. Web Design"
          value={boardName}
          onChange={(value) => {
            setBoardName(value);
          }}
        />
      </Label>
      <Label caption="Board Columns">
        <ul className="grid gap-3">
          {columns.map((column, i) => (
            <li key={column.id} className="flex items-center gap-4">
              <Input
                autofocus={column.name === "" && i === columns.length - 1}
                value={column.name}
                onChange={(value) => {
                  renameColumn(column.id, value);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  deleteColumn(column.id);
                }}
              >
                <img src="/icon-cross.svg" alt="" className="max-w-none" />
                <span className="sr-only">Delete column</span>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            addColumn();
          }}
          className="bg-purple-500-10 mt-3 w-full rounded-full py-2 text-body-lg font-bold text-purple-500"
        >
          <span aria-hidden="true">+ </span>Add New Column
        </button>
      </Label>
      <button
        type="submit"
        className="w-full rounded-full bg-purple-500 py-2 text-body-lg font-bold text-white"
      >
        Save changes
      </button>
    </form>
  );
}
