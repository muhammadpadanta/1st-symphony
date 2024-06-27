import React, { useState, useEffect } from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import Modal from 'react-modal';
import CustomModal from '../../../src/components/reactModal';
import { toast, Toaster } from "react-hot-toast";

function SongList() {
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [artistId, setArtistId] = useState('');
    const [linkId, setLinkId] = useState('');
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/admin/songs', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSongs(data);
            })
            .catch(error => console.error('Error:', error));

        fetch('http://localhost:8000/api/artists', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setArtists(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/api/admin/songs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                artist_id: artistId,
                link_id: linkId
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const artist = artists.find(artist => artist.artist_id === artistId);

                const newSong = {
                    ...data,
                    artist: artist
                };

                setSongs(prevSongs => [...prevSongs, newSong]);
                setModalIsOpen(false);

                fetch('http://localhost:8000/api/admin/songs', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        setSongs(data);
                    })
                    .catch(error => console.error('Error:', error));

                toast.success('Song created successfully');

                // Reset the form fields
                setTitle('');
                setArtistId('');
                setLinkId('');
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Failed to create song');
            });
    };


    const handleUpdate = (e) => {
        e.preventDefault();


        const formData = new FormData();


        formData.append('title', title);
        formData.append('artist_id', artistId);
        formData.append('link_id', linkId);

        fetch(`http://localhost:8000/api/admin/songs/${currentSong.song_id}?_method=PUT`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData  // Use the FormData object as the body
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Song Updated successfully');
                const index = songs.findIndex(song => song.song_id === currentSong.song_id);
                const updatedSongs = [...songs];
                updatedSongs[index] = data.song;
                setSongs(updatedSongs);
                setUpdateModalIsOpen(false);
                setArtistId('');
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Failed to update song');
            });
    };

    useEffect(() => {
        if (artistId === '') {
            // Fetch the updated list of songs
            fetch('http://localhost:8000/api/admin/songs', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setSongs(data);
                })
                .catch(error => console.error('Error:', error));
        }
    }, [artistId]);

    return (

        <>
            <Toaster/>

            <div className={"flex-col"}>
                <button onClick={() => setModalIsOpen(true)}
                        className={"p-3 bg-green-700 rounded-xl text-prime mb-5 hover:bg-green-800 transition-all"}>ADD
                    NEW SONG
                </button>

                {/*Modal Update*/}
                <CustomModal isOpen={updateModalIsOpen} onRequestClose={() => setUpdateModalIsOpen(false)}>
                    <form onSubmit={handleUpdate}>
                        <label>
                            Title:
                            <input className={"inputBox"} type="text" value={title}
                                   onChange={e => setTitle(e.target.value)} required/>
                        </label>
                        <label>
                            Artist:
                            <select className={"inputBox"} value={artistId} onChange={e => setArtistId(e.target.value)}
                                    required>
                                {artists.map(artist => (
                                    <option key={artist.artist_id} value={artist.artist_id}>{artist.name}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Link ID:
                            <input className={"inputBox"} type="text" value={linkId}
                                   onChange={e => setLinkId(e.target.value)} required/>
                        </label>
                        <button
                            className={"p-3 rounded-xl text-prime bg-blue-600 w-full mt-5 hover:opacity-80 transition-all"}
                            type="submit">Update
                        </button>
                    </form>
                </CustomModal>


                {/*Modal Create*/}
                <CustomModal
                    isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                >
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title:
                            <input className={"inputBox"} type="text" value={title}
                                   onChange={e => setTitle(e.target.value)} required/>
                        </label>
                        <label>
                            Artist:
                            <select className={"inputBox"} value={artistId} onChange={e => setArtistId(e.target.value)}
                                    required>
                                <option value="" disabled>Select an Artist</option>
                                {artists.map(artist => (
                                    <option key={artist.artist_id} value={artist.artist_id}>{artist.name}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Link ID:
                            <input className={"inputBox"} type="text" value={linkId}
                                   onChange={e => setLinkId(e.target.value)} required/>
                        </label>
                        <button
                            className={"p-3 rounded-xl text-prime bg-green-600 w-full mt-5 hover:opacity-80 transition-all"}
                            type="submit">Submit
                        </button>
                    </form>
                </CustomModal>

                <div className=" text-prime shadow-md bg-gray-800 rounded-xl">
                    <table className="w-fulltext-sm text-left">
                        <thead className=" text-xl">
                        <tr>
                            <th scope="col" className="px-6 py-3  ">
                                Song ID
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Artist
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Link ID
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {songs.map(song => (
                            <tr key={song.song_id}
                                className="bg-gray-900 text-prime border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 text-xl">{song.song_id}</td>
                                <td className="px-6 py-4 text-xl">{song.title}</td>
                                <td className="px-6 py-4 text-xl">{song.artist ? song.artist.name : ''}</td>
                                <td className="px-6 py-4 text-xl">{song.link_id}</td>
                                <td className="px-6 py-4 text-xl">

                                    <button
                                        className={"hover:scale-110 hover:text-red-600 text-xl transition-all"}
                                        onClick={async () => {
                                            const response = await fetch(`http://localhost:8000/api/admin/songs/${song.song_id}`, {
                                                method: 'DELETE',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                                }
                                            });

                                            if (response.ok) {
                                                toast.success('Song Deleted successfully');
                                                setSongs(songs.filter(s => s.song_id !== song.song_id));
                                            } else {
                                                toast.error('Failed to delete song');
                                            }
                                        }}
                                    >
                                        <BsFillTrash3Fill/>
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button className={"p-3 hover:bg-green-700  rounded-xl text-2xl transition-all"}
                                            onClick={() => {
                                                setTitle(song.title);
                                                setArtistId(song.artist.artist_id);
                                                setLinkId(song.link_id);
                                                setCurrentSong(song);
                                                setUpdateModalIsOpen(true);
                                            }}>
                                        <BiRefresh/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}

export default SongList;