import { Button, Table, TableHead, TableRow, TableCell } from "@mui/material";
import { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import arrowdown from "../../Components/Assets/Arrowdown.png";

export default function HistoryBody() {
    const [imageData, setImageData] = useState<{ name: string; url: string; date: string; time: string }[]>([]);

    useEffect(() => {
        const storage = getStorage();
        const imagesRef = ref(storage, '/');

        const fetchImageURLs = async () => {
            try {
                const imageList = await listAll(imagesRef);
                const data: { name: string; url: string; date: string; time: string }[] = [];
                for (const imageRef of imageList.items) {
                    try {
                        const url = await getDownloadURL(imageRef);
                        const name = getImageName(imageRef.name);
                        const [date, time] = parseDateTime(name);
                        data.push({ name, url, date, time });
                    } catch (error) {
                        console.error("Error fetching image URL:", error);
                    }
                }
                setImageData(data);
            } catch (error) {
                console.error("Error listing images:", error);
            }
        };

        fetchImageURLs();
    }, []);

    const getImageName = (fullName: string) => {
        const prefixLength = "elephant_detection_".length;
        const extensionLength = ".jpg".length;
        return fullName.substring(prefixLength, fullName.length - extensionLength);
    };

    const parseDateTime = (name: string) => {
        const [date, time] = name.split("_");
        return [date, time];
    };

    return (
        <div style={{ width: "100%", height: "100%", justifyContent: "flex-end", alignContent: "flex-end", display: "flex" }}>
            <div style={{ position: "absolute", top: 90, left: 300, width: 1100, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <p style={{ fontSize: 28, fontWeight: "500" }}>History</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ paddingBottom: 5, fontSize: 18, fontWeight: "500" }}>Filter by :</p>
                    <Button style={{ marginLeft: 18, backgroundColor: "#E9C47D", fontSize: 18, fontWeight: "500", color: "black", height: 32, width: 105 }}>
                        Week
                        <img style={{ marginLeft: 5 }} src={arrowdown} alt="arrowdown" />
                    </Button>
                </div>
                <div style={{ position: "absolute", top: 200, left: 50, width: 1040 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Image</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {imageData.map((image, index) => (
                                <TableRow key={index}>
                                    <TableCell>{image.date}</TableCell>
                                    <TableCell>{image.time}</TableCell>
                                    <TableCell>
                                        <img src={image.url} alt={image.name} style={{ width: 100, height: 100 }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}