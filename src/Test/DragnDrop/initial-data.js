export const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1'],
};

export const List = {
    list: [
        {
            id: 1,
            title: "Read some news",
        },
        {
            id: 2,
            title: "Go out for a walk",
        },
        {
            id: 3,
            title: "Do some exercise",
        },
        {
            id: 4,
            title: "Watch tutorials on YouTube",
        },
        {
            id: 5,
            title: "Netflix and chill",
        },
        {
            id: 6,
            title: "Read a book",
        },
    ],
    getList: function () {
        console.log(List.list);
        return (
            (localStorage.getItem("theList") &&
                JSON.parse(localStorage.getItem("theList"))) ||
            this.list
        );
    },
    saveList: (list) => {
        localStorage.setItem("theList", JSON.stringify(list));
    },
};
