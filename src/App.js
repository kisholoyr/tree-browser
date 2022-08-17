import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";

const StyledTree = styled.div`
  line-height: 1.5;
`;
const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;
const Collapsible = styled.div`
  height: ${(p) => (p.isOpen ? "0" : "auto")};
  overflow: hidden;
`;

const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile>
      <span>{name}</span>
    </StyledFile>
  );
};

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const Tree = ({ children }) => {
  return <StyledTree>{children}</StyledTree>;
};

Tree.File = File;
Tree.Folder = Folder;

export default function App() {
  return (
    <div className="App">
      <Tree>
        <Tree.Folder name="root">
          <Tree.Folder name="directory-1">
            <Tree.File name="Modal.js" />
            <Tree.File name="Modal.css" />
          </Tree.Folder>
          <Tree.Folder name="directory-2">
            <Tree.File name="Modal.js" />
            <Tree.File name="Modal.css" />
          </Tree.Folder>
          <Tree.Folder name="directory-3">
            <Tree.File name="Modal.js" />
            <Tree.File name="Modal.css" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.File name="index.js" />
        <Tree.File name="component-1.js" />
        <Tree.File name="component-2.js" />
      </Tree>
    </div>
  );
}
