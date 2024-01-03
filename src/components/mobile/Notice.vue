<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';
</script>
<template>
    <div class="flex">
        <div>
            <img style="width: 20px; height: 20px;"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA0CAMAAADomgtXAAAASFBMVEVHcExiYmlGSU1HSU5GSE1GSE1IS1BHSU1ITE5GSE1HSU5GSU5ISE9HS09OTlVHSE5GSU1GSU5crfZer/hMZX1GSE1crPb///8PiOtsAAAAFXRSTlMABZZ23Poz7SW9imNNQBGqpJ7jSf5gZHjkAAACKElEQVRIx51W22KsIAzkfhHUPd3D9v//tAmooILQ5onFTJKZDRBC7mYcs1qGILVlzpBBU5MIJxOTGoHZUDHbg5o1+kkskxvDZVqDrU8V0wmd5Oogq4YclCgN2dwatyfawi2xypchHtzmtDcDxhPzivUujTLFRobCYtp3JxCHbtRFtVyvkReuHBR6lEVh2+EC+eq5kg8ctI9LSMjzBw6Zjsj6lnMRRyWqTJhSqoOLuPCkNkdjIbDyW/6NVdmztiCB9DnDicqcK/CykC2GkpmW2jkdJvZaI2FZ0oR+sYUY7Az8V4gFlNaiP0OOiZ9ezFohtJRaCGvZqwh7co2+iZ/i1R4P0nKVeF6ixMIV0+HBNFObHCpLuhLqRPbgXhmzULoYozzP8YSjqMeUVXM+wQQSYtfuYEh7c/DuUN0ghZRpjk78CkxCzymzhVrTPwIh8LxpTjeh/K3/N0EoR6jcuh5zFMfUlnJn9Wx51DcyWGY+L2IvpGysoplmTJrC4DlUZBRIFJ7LuJInOSDM7YZYwPUTbe/XuB1OOSDM7VKi4HoAKeQPfwGSA/jnUtvivL8+Tft6P/wdDzhAPjTA59EeWq4DbDd5B9g+Vj1g8yDj5++qJWDz6ugBm5dVF9i6HrvA1oXcE6f5BPSBjUdnAFh/5q4cK8D6wzoCjIPJ9SkfAsbr6zI8jAHpfVwZEKc+II0CbyPZMPA6BP4CeB47fwUsB93P82XVHq3/P+HeP4/idiZuwZI1AAAAAElFTkSuQmCC" />
        </div>

        <Vue3Marquee>
            <span class="content-item text-sm text-gray">
                💥Nhà cái C1 xin chào quý khách! 💥Chúc quý khách an khang thịnh vượng,
                💥Kiếm được
                thật nhiều tiền để ăn tết !!!
            </span>
        </Vue3Marquee>
    </div>
</template>