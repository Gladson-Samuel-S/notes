import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from '../../common/constants'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    tagTypes: ['Notes'],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => '/notes',
            providesTags: ['Notes']
        }),
        getANote: builder.query({
            query: (id) => `/notes/${id}`,
            providesTags: ['Notes']
        }),
        addNote: builder.mutation({
            query: (note) => ({
                url: '/notes',
                method: 'POST',
                body: note
            }),
            invalidatesTags: ['Notes']
        }),
        updateNote: builder.mutation({
            query: (note) => ({
                url: `/notes/${note.id}`,
                method: 'PATCH',
                body: note
            }),
            invalidatesTags: ['Notes']
        }),
        deleteNote: builder.mutation({
            query: ({ id }) => ({
                url: `/notes/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Notes']
        }),
    })
})

export const {
    useGetNotesQuery,
    useGetANoteQuery,
    useAddNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation
} = apiSlice
